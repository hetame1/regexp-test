const str = `
010-2065-8946
thepoi8946@naver.com
https://www.naver.com
The alpha kfkp the
abbbcccddddd
`

const h = `  the hello  world       !


`

console.log(
    str.match(/(?<=@).{1,}/g)
)