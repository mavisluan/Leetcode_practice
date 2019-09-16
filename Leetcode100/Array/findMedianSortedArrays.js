// Time: O(log(m+n))
const findMedianSortedArrays = (nums1, nums2) => {
    const total = nums1.length + nums2.length;
    const halfT = Math.floor(total / 2);

    // Kth element is nums[kth-1]
    if (total % 2 === 1) {      // if total is odd, find [...nums1, ...nums2][halfT + 1]
        return findKth(nums1, 0, nums2, 0, halfT + 1);
    } else {   // if total is even, find ([...nums1, ...nums2][halfT] + [...nums1, ...nums2][halfT + 1]) / 2
        return (findKth(nums1, 0, nums2, 0, halfT)
            + findKth(nums1, 0, nums2, 0, halfT + 1)) / 2;
    }
};

const findKth = (nums1, start1, nums2, start2, k) => {
    // console.log(`nums1:${nums1}, start1:${start1}, nums2:${nums2}, start2:${start2}, k:${k}`);
    // if there is no elements in nums1 or nums2, return from the other (which has elements)
    if (start1 >= nums1.length) {
        return nums2[start2 + k - 1];
    }
    if (start2 >= nums2.length) {
        return nums1[start1 + k - 1];
    }

    if (k === 1) {
        return Math.min(nums1[start1], nums2[start2]);
    }

    // split nums1 && nums2 into half [0 --> k/2 - 1]  [ k/2 ---> nums.length - 1]
    // compare the midValue of each arrays
    //      --> move start point forward k/2 to remove the smaller part
    //      --> decrement the kth position by k/2 (because the smaller values ahead of the combined array is removed)
    let halfK = Math.floor(k / 2);
    let idx1 = start1 + halfK - 1;
    let idx2 = start2 + halfK - 1;
    let val1 = idx1 < nums1.length ? nums1[idx1] : Number.MAX_VALUE;
    let val2 = idx2 < nums2.length ? nums2[idx2] : Number.MAX_VALUE;

    if (val1 < val2) {
        return findKth(nums1, start1 + halfK, nums2, start2, k - halfK);
    } else {
        return findKth(nums1, start1, nums2, start2 + halfK, k - halfK);
    }
};


console.log('findMedianSortedArrays', findMedianSortedArrays([1, 3], [2]));
console.log('findMedianSortedArrays', findMedianSortedArrays([1, 2], [1,1]));
console.log('findMedianSortedArrays', findMedianSortedArrays([2,3,4,5,6], [1]));
console.log('findMedianSortedArrays', findMedianSortedArrays([1], [2]));
