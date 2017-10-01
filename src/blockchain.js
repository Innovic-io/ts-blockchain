const { parse } = require('url');
const { sha1 } = require('object-hash');

class Blockchain {

  constructor() {
    this.currentTransactions = [];
    this.chain = [];
    this.nodes = new Set();

    this.newBlock(100, 1);
  }

  /**
   * Register new node in blockchain
   *
   * @param address Address of node. Eg.: http://192.168.0.5:5000
   */
  registerNode(address) {
      const parsedUrl = parse(address);
      console.log(parsedUrl);

      this.nodes.add(parsedUrl);
  }

  /**
   * Determine if a given blockchain is valid
   *
   * @param chain
   */
  validChain(chain) {
    const lastBlock = chain[0];
    const currentIndex = 1;

    
  }

  /**
   * New block in the chain
   *
   * @param proof Proof given by the Proof of Work algorithm
   * @param previousHash Hash of previous block
   *
   * @return {Object} New block
   */
  newBlock(proof, previousHash = null) {

    const block = {
      index: this.chain.length + 1,
      timestamp: new Date(),
      transactions: this.currentTransactions,
      proof: proof,
      previous_hash: previousHash || this.hash(this.chain[-1])
    };

    this.currentTransactions = [];

    this.chain.push(block);

    return block;
  }

  static hash(chain) {

    const sortObjectKeys = (obj) => {
      return Object.keys(obj).sort().reduce((acc,key)=>{
        acc[key]=obj[key];
        return acc;
      },{});
    };

    return sha1(sortObjectKeys(chain));
  }
}
