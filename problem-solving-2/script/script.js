/*
A-Type
A-01: Array থেকে Largest ও Smallest বের করো।
*/
const numbers = [45, 12, 89, 3, 67];

function getTarget(numbers) {


    if(!Array.isArray(numbers)){
        return "invalid"
    }

   
        let largestNumber = numbers[0];
        let smallestNumber = numbers[0];
        for (const number of numbers) {
            if (typeof (number) !== "number") {
                return "invalid"

            }

            if (number > largestNumber) {
                largestNumber = number;
            }

            if (number < smallestNumber) {
                smallestNumber = number;
            }

        }

        return {
            largest: largestNumber,
            smallest: smallestNumber
        }
    

}
console.log(getTarget(numbers));



/*
A-02: Sentence থেকে শুধু even index-এর word রাখো।
*/




/*
A-03: ৭ দিনের steps যোগ করে goal হয়েছে কিনা দেখো।
*/




/*
A-04: String palindrome কিনা check করো।
*/




/*
A-05: String-এ কয়টি vowel আছে গণনা করো।
*/




/*
A-06: Array থেকে duplicate remove করো।
*/




/*
A-07: Student-এর total, average ও grade বের করো।
*/




/*
A-08: Year leap year কিনা check করো।
*/




/*
A-09: Email count ও longest domain বের করো।
*/




/*
B-Type
B-01: Number-এর সব digit-এর যোগফল বের করো।
*/




/*
B-02: Array-এর running total তৈরি করো।
*/




/*
B-03: Sentence-এর প্রতিটি word reverse করো।
*/




/*
B-04: Array-এর second largest number বের করো।
*/




/*
B-05: Even ও odd সংখ্যার count বের করো।
*/




/*
B-06: Employee-এর net salary হিসাব করো।
*/




/*
B-07: প্রতিটি character কতবার এসেছে তা count করো।
*/




/*
B-08: Cart-এর total সঠিক কিনা verify করো।
*/




/*

এগুলোই তোমার assignment-style practice problems। এগুলো solve করতে পারলে JavaScript-এর basic problem solving অনেক শক্ত হবে।
*/