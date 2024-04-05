const array = [1,2,3,4];
console.log(array);
const arrayList = array.map((a, index) => (
   <li key = {index}>{a}</li>
));
const user = [
    {
        id: 1,
        name: "jerin",
    },
    {
        id: 2,
        name: "jerin1",
    }
]
const userList = user.map((u, index) => (
    <ul  key = {index}>
        <li>
            {u.id}
        </li>
        <li>{u.name}</li>
    </ul>
))

const List = () => {
    return(
        //div na dile likhte dibena

        <div>
         {arrayList}
         {userList}
        </div>
    )
}
export default List