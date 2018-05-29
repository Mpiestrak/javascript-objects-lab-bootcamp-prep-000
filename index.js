var recipes = {breakfast: "toast"};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var recipes2 = Object.assign({}, object)
  delete recipes2.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
  var recipes2 = delete object.key
  return recipes
}
