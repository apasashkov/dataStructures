function BinarySearchTree(){
  var Node=function(key){
    this.key=key;
    this.left=null;
    this.right=null;
  };

  var root=null;

  this.insert=function(key){

    var newNode=new Node(key);
    if(root===null){
      root=newNode;
    } else {
      insertNode(root,newNode);
    };
  };

  function insertNode(node,newNode){
    if(newNode.key<node.key){
      if(!node.left){
        node.left=newNode;
      } else {
        insertNode(node.left,newNode);
      }
    } else {
      if(!node.right){
        node.right=newNode;
      } else {
        insertNode(node.right,newNode);
      }
    }
  };

  this.inOrderTraverse=function(callback){
    inOrderTraverse(root,callback);
  };

  var inOrderTraverse=function(node,callback){
    if(node!==null) {
      inOrderTraverse(node.left,callback);
      callback(node.key);
      inOrderTraverse(node.right,callback);
    }
  };

  this.preOrderTraverse=function(callback){
    preOrderTraverseNode(root,callback);
    }
  
  var preOrderTraverseNode=function(node,callback){
    if(node!==null){
      callback(node.key);
      preOrderTraverseNode(node.left,callback);
      preOrderTraverseNode(node.right,callback);
    }
  };

  this.postOrderTraverse=function(callback){
    postOrderTraverseNode(root,callback);
  };

  var postOrderTraverseNode=function(node,callback){
    if(node!==null){
      postOrderTraverseNode(node.left,callback);
      postOrderTraverseNode(node.right,callback);
      callback(node.key);
    }
  }
};

var n=new BinarySearchTree();
n.insert(1);
n.insert(50);
n.insert(24);
n.insert(3);
n.insert(12);
n.insert(33);
n.insert(84);
n.insert(32);
n.insert(31);
n.insert(45);
n.insert(4);
n.insert(5);

n.inOrderTraverse(function(value){
  console.log(value);
})
console.log('-----------------');
n.preOrderTraverse(function(value){
  console.log(value);
})
console.log('-----------------');
n.postOrderTraverse(function(value){
  console.log(value);
})
