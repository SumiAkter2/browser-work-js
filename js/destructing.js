const company={
    name:'gp', work:{id:45,choice:'red'}, roll:34
}
const {name, id}=company.work;
console.log(name, id)

const [p,r]=[3, 5]
console.log(p,r)
const {sky, soil}={sky:'blue', soil:'mati', color:'red'}
console.log(sky,soil)
console.log(company?.work?.p.r);