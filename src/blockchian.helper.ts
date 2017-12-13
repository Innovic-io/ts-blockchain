import { SHA384 } from "crypto-js";

export function calculateHashForNextBlock(block) {

  return SHA384(JSON.stringify(sortObjectKeys(block))).toString();
}

/**
 *
 * @param obj
 * @returns {{}}
 */
export const sortObjectKeys = (obj) => {
  return Object.keys(obj).sort().reduce((acc,key)=>{
    acc[key]=obj[key];
    return acc;
  },{});
};
