import { calculateHashForNextBlock } from './blockchian.helper';
import { IBlock, IBlockChain } from './blockhain.interfaces';

export class BlockChain implements IBlockChain {

  private chain: IBlock[];

  constructor() {

    this.chain = [];

    // genesis block
    this.chain.push({
      index: 1,
      timestamp: new Date().getTime(),
      data: 'Genesis block!!!',
      previous_hash: null
    });
  }

  getBlockChainLength() {

    return this.chain.length;
  }

  newBlock(data: string) {

    const block = {
      index: this.getBlockChainLength() + 1,
      timestamp: new Date().getTime(),
      data,
      previous_hash: calculateHashForNextBlock(this.chain[this.getBlockChainLength() - 1])
    };

    this.chain.push(block);

    return block;
  }

  isChainValid() {

    for (let i = 0; i < this.getBlockChainLength(); i++) {

      const hash = calculateHashForNextBlock(this.chain[i]);

      if (this.chain[i + 1] && hash !== this.chain[i + 1].previous_hash) {
        return false;
      }

    }

    return true;
  }
}
