function InsertionSort(A)      
{                              
    let n = A.length;
    for (let i = 0; i < n; i++)
     { let v = A[ i ], j = i-1;
       while (j >= 0 && A[j] > v)
        { A[j+1] = A[j]; j--; }
       A[j+1] = v;
     }                    
    return A;   
}
// first call
var result = InsertionSort(items);
