// Solution: Two pointers
// area size: height * width
// [1, 8, 6, 2, 5, 4, 8, 3, 7];
//  |                       |
// Left                     Right
// Area = min of (leftP val, rightP val) * (rightP - leftP);
// move the smaller val pointer (left ++ || right --)
//       --> when moving the pointer, width gets smaller, only increasing height can make area bigger
// Note: if the leftVal === rightVal --> move both pointers
//       --> if only move one pointer, one height gets smaller, the area gets smaller
//       --> moving both points, left and right can both get bigger ---> area gets bigger
// Time: O(n)  one pass        Space: O(1)
const maxArea = (arr) => {
    let [left, right] = [0, arr.length - 1];
    let area = 0;
    while (left < right) {
        area = Math.max(area, Math.min(arr[left], arr[right]) * (right - left));

        if (arr[left] < arr[right]) {
            left++;
        } else if (arr[left] > arr[right]) {
            right--;
        } else {   // leftVal === rightVal --> move both pointers
            left++;
            right--;
        }
    }
    return area;
};

console.log('maxArea', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
