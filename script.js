class car{
constructor(brand)
{
this.carname=brand
}
present(){
return 'I have a ' + this.carname
}
}
// this is a child class
class model extends car{
constructor(brand,mod){
super(brand); //inheritance
this.model=mod
}
show(){
return this.present() + ', it is a ' + this.model
}
}
//object
let mycar = new model("Kia","Cerato")
document.getElementById("p1").innerHTML=mycar.show()




