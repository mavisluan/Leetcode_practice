const serializeDeserializeDFS = root => {
    if (!root) return [];

    const result = [];
    const helper = node => {
        if (!node) {
            result.push(null);
            return;
        }

        result.push(node.val);
        helper(node.left);
        helper(node.right);
    };

    helper(root);
    return result;
};
