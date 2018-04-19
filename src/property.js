const hapiness = { level : 5 , 
    value : 2,
    adequate : 1,
    stupidity : 4,
    time : 3,
 }; 

function sortOfProperty(hapiness) { 
    const propertyArray = [];
    for (const prop in hapiness) {
        propertyArray.push({property : prop, value : hapiness[prop]});
    }

    return propertyArray.sort((a, b) => b.value - a.value).map(elem => elem.property );
}
console.log(sortOfProperty(hapiness));
module.exports = sortOfProperty();



