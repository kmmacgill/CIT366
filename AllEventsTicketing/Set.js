function Set() {
	
	this.intersection = function(listA, listB) {
	   var resultList = [];
	   //check for nulls first.
	   if (listA === null || listB === null) {
	   	return null;
	   }
	   for (var i = 0; i < listA.length; i++) {
	   	for (var j = 0; j < listB.length; j++) {
	   		if (listB[j] === listA[i]) { //if same
	   			resultList.push(listB[j]); //add to list
	   			break; // break out of loop...
			}
		}
	   }
	   return resultList;
	}
    
	this.union = function(listA, listB) {
	   var resultList = [];
	   if (listA === null || listB === null) {
	   	return null;
	   }
	   for (var i = 0; i < listA.length; i++) {
			for (var j = 0; j < listB.length; j++) {
				if (listA[i] === listB[j]) { //check if value exists in both...
				   listB.splice(listB.indexOf(listA[i]),1); // if it does, remove the duplicate
                    break;
			   }
		   }
	   }
       //now add the remaining values to resultList
	   for (var k = 0; k < listA.length; k++) {
	   		resultList.push(listA[k]);
		}
		for (var l = 0; l < listB.length; l++) {
			resultList.push(listB[l]);
		}
	   return resultList;
	}

	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
	   if (listA === null || listB === null) {
            return null;
       }
       var add = true;
       for (var i = 0; i < listA.length; i++) {
           add = true;
           for (var j = 0; j < listB.length; j++) {
               if (listA[i] === listB[j]) { //if you find a match
                   add = false; //flag not to add
               }
           }
           if (add === true) {
               resultList.push(listA[i]);
           }
	   }
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {
	   var resultList = [];
	   if (listA === null || listB === null) {
            return null;
	   }
	   var add = true;
	   for (var i = 0; i < listA.length; i++) {
	       add = true;
           for (var j = 0; j < listB.length; j++) {
               if (listA[i] === listB[j]) { //check if value exists in both...
                   add = false; // if you found a match, go ahead and flag it down
                   listB.splice(listB.indexOf(listA[i]),1); //and remove the duplicate from B
                   break; // break out of the loop
               }
           }
           if (add) {
               resultList.push(listA[i]);
           }
       }
       //now add the remaining values in B to resultList
       for (var k = 0; k < listB.length; k++) {
           resultList.push(listB[k]);
       }
	   return resultList;
	}	
	

}
