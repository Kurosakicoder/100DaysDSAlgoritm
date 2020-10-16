# Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

# Return that integer.


# Example 1:

# Input: arr = [1,2,2,6,6,6,6,7,10]
# Output: 6


class Solution:
    def findSpecialInteger(self, arr: List[int]) -> int:
        return collections.Counter(arr).most_common(1)[0][0]
