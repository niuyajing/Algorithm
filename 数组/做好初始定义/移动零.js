 /**
  * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。  
  * 
  * 示例：
  *     输入: [0,1,0,3,12]
  *     输出: [1,3,12,0,0]
  * 说明：
  *     1.必须在原数组上操作，不能拷贝额外的数组。
  *     2.尽量减少操作次数。
  * 
  * 
  * 解题思路：
  * 
  * 1.主要思想是遍历数组遇到非0的，就从数组第一位开始往后排，最后剩余位置补0。
  * 2.我们需要用到2个指针：
  *     index(用以记录最后一个非0的值的下一个索引)
  *     i (用以遍历数组)
  * 3.需要注意：
  *     1)遍历数组的方法有很多，for\while\map\forEach\for...of\for...in等
  *         在性能上，有一个奇怪的现象：
  *             在google浏览器上：
  *                 传统的for\while的耗时比ES6+耗时少
  *                 map耗时是其他方式的4-5倍,但堆内存占用最少
  *             火狐和safari：
  *                 与google几乎相反,ES6+明显具有优势,map耗时不多,占用堆内存同样最少
  *         
  */

 /**
 * @param {number[]} nums
 * @return {void} 不返回任何内容，就地修改nums
 */
var moveZeroes = function(nums) {
    let index = 0;
    for(var k=0;k<nums.length;k++){
        if(nums[k]!== 0){
            nums[index] = nums[k];
            index ++;
        }
    }
    while(index < nums.length){
        nums[index++] = 0;
    }
};
const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);