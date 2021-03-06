# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if not root:
            return 1
        left = self.isBalanced(root.left)
        if not left:
            return
        right = self.isBalanced(root.right)
        if not right:
            return
        return abs(left-right) < 2 and 1 + max(left, right)
