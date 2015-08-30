// constructor
function ItemLibrary() {
  this.items = [];
  this.id = 0;
}

// methods
ItemLibrary.prototype.addItem = function(name) {
  var newItem = {
    name: name,
    id: this.id
  };

  this.items.push(newItem);
  this.id += 1;
};

// create some instances

module.exports = {
  ItemLibrary: ItemLibrary,
};
