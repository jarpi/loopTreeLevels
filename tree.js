class Tree {
	constructor(root, left, right){
		this.root = root;
		this.left = left;
		this.right = right;
	}
}

const loopKeys = (a) => {
	return Object.keys(a).forEach((k)=>{console.dir(k + ': ' + a[k])})
}


const loopTree = (tree, res, level) => {
	if (!tree.right && !tree.left) return res;
	res[level] = res[level] || '';
	res[level] += (res[level]? ', ':'') + 
		(tree.right.root || tree.right) + 
		", " + (tree.left.root || tree.left);
	return loopTree(tree.left, res, level+1) && loopTree(tree.right, res, level+1);
}

const t1 = new Tree("A", "B", "C");
const t2 = new Tree("A", new Tree("B","D","E"), new Tree("C","F","G"));
const t3 = new Tree("A", "B", new Tree("C","F","G"));

loopKeys(loopTree(t1, {}, 0));

loopKeys(loopTree(t2, {}, 0));

loopKeys(loopTree(t3, {}, 0));
