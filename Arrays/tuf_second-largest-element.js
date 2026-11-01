class Solution{
    secondLargestElement(nums){
        let largest = -Infinity;
        let secondLargest = -Infinity

        for(let i=0; i < nums.length; i++){
            if(nums[i] > largest){
                secondLargest = largest
                largest = nums[i]
            }else if(nums[i] > secondLargest && nums[i] !== largest){
                secondLargest = nums[i]
            }
        }

        if(secondLargest === -Infinity){
            return -1;
        }

        return secondLargest;
    }
}