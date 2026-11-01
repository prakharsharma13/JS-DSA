class Solution{
    largestElement(nums){
        let largest = nums[0];

        for(let i=1; i < nums.length; i++){
            if(largest < nums[i]){
                largest = nums[i]
            }
        }
        return largest
    }
}