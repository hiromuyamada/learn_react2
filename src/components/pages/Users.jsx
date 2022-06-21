import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return{
        id:val,
        image:"https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        name:`hiromu_${val}`,
        email:'example@co',
        phone:"090-000-0000",
        company:{
          name:"test株式会社"
        },
        website:"www.com",
      
    }
}))


export const Users = () => {
    return(
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
            {users.map((user)=>(
                <UserCard key={users.id} user={user}/>
            ))}
            </SUserArea>
        </SContainer>
    );
};

const SContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:24px;
    `;

const SUserArea = styled.div`
    padding-top:40px;
    width:100%;
    display:grid;
    grid-template-colmus:repeat(auto-fit,minmax(200px,1fr));
    grid-gap:20px;
    `