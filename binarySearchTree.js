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
  }
}
