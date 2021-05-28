/**
 * 
 * 给你一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并原地修改输入数组。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 示例 1：
 *   输入：nums = [3,2,2,3], val = 3
 *   输出：2, nums = [2,2]
 *   解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。
 *        例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
 * 示例 2：
 *   输入：nums = [0,1,2,2,3,0,4,2], val = 2
 *   输出：5, nums = [0,1,4,0,3]
 *   解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 *        注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
 * 
 * 解题思路一：
 *   1.主要思路遇到不等于val的元素，就从数组第一位开始往后排，最后剩余位置补0。
 *   2.我们需要用到2个指针：
 *     index(用以记录最后一个不等于val的值的下一个索引)
 *     i (用以遍历数组)
 * 解题思路二：
 *   1.主要思路是找到等于val的元素，将该位置的值修改为与nums最后一位，然后遍历项减去1,
 *     相当于把末尾未遍历的值复制了一份，那么最后一项也就没有再遍历的必要了
 *   2.两个指针:
 *      i: 索引，用以遍历数组
 *      len: 需要遍历的元素的长度，其最终值就是新的数组的长度
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// //一
// var removeElement = function(nums, val) {
//     let index=0;
//     for(var i=0;i<nums.length;i++){
//         if(nums[i] != val){
//             nums[index] = nums[i];
//             index++;
//         }
//     }
//     return index;
// };

// //二
var removeElement = function(nums, val) {
    var i = 0,len = nums.length;
    while(i<len){
        if(nums[i] == val){
            nums[i] = nums[len-1];
            len--;
        }else{
            i++;
        }
    }
    return len;
};

const nums = [0,1,2,2,3,0,4,2], val = 2;
const len = removeElement(nums,val);
console.log(len,nums.filter((i,k)=>k<len));
