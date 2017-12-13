export interface IBlock {
  index: number;
  timestamp: number;
  data: string;
  previous_hash: string;
}

export interface IBlockChain {
  getBlockChainLength(): number;
  newBlock(data: string): IBlock;
  isChainValid(): boolean;
}
