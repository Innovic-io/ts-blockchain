import { BlockChain } from './blockchian';

describe('BlockChain test', () => {

  it('test genesis block', () => {

    const blockChain = new BlockChain();

    expect(blockChain.getBlockChainLength()).toBe(1);
    expect(blockChain.isChainValid()).toBeTruthy();
  });


  it('validate uniqueness of previous_hash', () => {

    const hashes = [];

    const blockChain = new BlockChain();

    const numberOfBlocksToGenerate = 1000;

    for (let l = 0; l < numberOfBlocksToGenerate; l++) {

      const block = blockChain.newBlock("Block number " + l);

      if (hashes.indexOf(block.previous_hash) === -1) {
        hashes.push(block);
      }
    }

    expect(blockChain.isChainValid()).toBeTruthy();
    expect(hashes.length).toBe(numberOfBlocksToGenerate);
  });

  afterAll((done) => {

    const used = process.memoryUsage();

    for (let key in used) {
      process.stdout.write(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB \n`);
    }

    done();
  });
});
