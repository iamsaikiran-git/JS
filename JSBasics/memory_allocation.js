// Stack (Primitive data types)  Heap (Non - Primitive datatype)
//https://www.youtube.com/watch?v=fpqFM1AaF0c
//By default all the declared variables stay in stack 
// the variables which areof type object, function and arrays stayin heap memory
// Visualize the heap memory as link from parent node to child nodes in case of objects functions and arrays
// JavaScript garbage collector works in a way that frequently it runs garbage collection algorithms to collect the unused items and dispose them for optimal performance
// One algorithm is Reference count algorithm
// This algorithm counts the references of each object and disposes the objects whoch has no references
//Mark and sweep algorithm
// this algorithm just traverses from the root window object to the child objects 
// whie traversing this way it marks the objects which are being referenced by the root window object 
// once the traversing ends it disposes all the objects which has not been references from the window object