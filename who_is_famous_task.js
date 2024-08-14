/*
Task!
A celebrity is a person who is known to all but does not know anyone at a party. A party is being organized by some
people.
A square matrix mat is used to represent people at the party such that if an element of row i and column j is set
to 1 it means ith person knows jth person. You need to return the index of the celebrity in the party, if the
celebrity does not exist, return -1.
 */

const whoIsFamous = (cel) => {
    const n = cel.length;
    let candidate = 0;

   //first walking: search for candidate to celebrity
    for(let i = 0; i < n; i++){
        if(cel[candidate][i] === 1){
            candidate = i;
        }
    }

    //second walk: candidate is really true Celeba?!
    for(let i = 0; i < n; i++){
        if(i !== candidate && (cel[candidate][i] === 1 || cel[i][candidate] === 0)){
            //if candidate know somone or someone don't know candidate. So, this is't celebrity!
            return -1;
        }
    }
    return candidate;
};


//test

const celebrity = [
    [0, 1, 1],
    [0, 0, 0],
    [0, 1, 0]
];

/*
The complexity of the algorithm
First pass: In the first cycle, we determine the celebrity candidate by going through all the elements of the matrix.
This cycle has a complexity
O(n), where n is the number of people (the size of the matrix).

Second pass: In the second cycle, we check whether the candidate found is really a celebrity,
also going through all the elements of the matrix. This cycle also has a
complexity of O(n).

Thus, the total time complexity of the algorithm is O(n)+O(n)=O(2n)=O(n).

Spatial complexity = O(1).
The algorithm uses a constant amount of additional memory to store the candidate index and several variables,
which means spatial complexity

 */
