//var ppl = Lawnchair(function() {

    //this.save({key:'config', options:[1,2,3]}, function(obj){
        //console.log(obj)
    //})

    //this.save({person:'joni'}, 'console.log(record)')
//})


//var store = new Lawnchair({name:'testing'}, function(store) {

    //var me = {key:'brian'};

    //store.save(me);

    //store.get('brian', function(me) {
        //console.log(me);
    //});
//});


//db = Lawnchair({name : 'db'}, function(store) {
    //console.log('storage open');
    //var formDetails = {
        //"candidateName" : "Viswa",
        //"DateTimeOfVerification" : "30/07/2012",
        //"ResidentialAddress" : "3 The Road, Etcc...."
    //}

    //store.save({key:"fdetails", value:formDetails});

    //store.get("fdetails", function(obj) {
        //console.log(obj);
        //alert(obj.value.candidateName);
        //alert(obj.value.DateTimeOfVerification);
        //alert(obj.value.ResidentialAddress)
    //});
//});


//var database = Lawnchair({name : 'database'}, function(db) {
  //db.save({key:"key-name", value: {first: 'first', second: 'second'}});
//});

//database.get('key-name', function(object){
  //console.log(object.value.first);
//});


//var db_two = Lawnchair({name : 'database'}, function(db) {
//});

//an array of hashes values
//var values = [{a: 'a'},{b: 'b'},{c: 'c'}]

//db_two.save({key: 'first-element', value: values})

//db_two.save({key: 'second-element', value: values})

//db_two.get('second-element', function(object){
  //console.log(object.value); //this outputs ==> undefined
//});

//db_two.get('first-element', function(object){
  //console.log(object.value); //this outputs ==> undefined
//});

//db_two.get('first-element', function(object){
  //console.log(object.value[1]['b']); //this outputs ==> b
  //console.log(object.value[0]['a']); //this outputs ==> a
  //console.log(object.value[0]['c']); //this outputs ==> undefined
//});

//Lawnchair.get('first-element', function(object){
  //console.log(object.value); //this outputs ==> undefined
//});
//
//

//create a value and set your database name that later access it using a dom adapter
// because I had problems when using the default it was working with the window name
// and we you close your browser you lose all your data :(
Lawnchair({name : 'db', adapter:'dom'}, function(store) {
    store.save({key:"fdetails", value: {name: 'heriberto', age: 25}, other_value: 'no lo se' });
});


// if you close your browser to access your database you can do something like
// just create and instance of Lawnchair and use it
// just to use it
var ab = Lawnchair({name : 'db'}, function(store) {
});


// to get the value from a key value
ab.get("fdetails", function(obj) {
  console.log(obj);
});

ab.save({key:"otto", value: {name: 'jose', age: 25}, other_value: 'other' });

ab.get("otto", function(obj) {
  console.log(obj); // the output is => { value: {name: 'jose'}, other_value: 'other'}
});


// just to test how much of data accept the localstorage
// I saw that support 10,0000 key value pairs
//
function run_many(){
  var ab = Lawnchair({name : 'db'}, function(store) {
  });

  for (var i=0;i<3000;i++)
  {
    ab.save({key:"key_value_" + i, value: {name: 'jose' + i, age: i}});
  }
}

// to access the data created with the above function
ab.get("key_value_0", function(obj) {
  console.log(obj);
});

ab.get("key_value_2500", function(obj) {
  console.log(obj);
});

function run_many(){
  var ab = Lawnchair({name : 'db'}, function(store) {
  });

  for (var i=6000;i<9000;i++)
  {
    ab.save({key:"key_value_" + i, value: {name: 'jose' + i, age: i}});
  }
}

ab.get("key_value_7000", function(obj) {
  console.log(obj);
});
