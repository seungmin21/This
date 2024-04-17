const obj = {
  age : 24,
  get : function () {
    console.log(this);
  }
};

obj.get();