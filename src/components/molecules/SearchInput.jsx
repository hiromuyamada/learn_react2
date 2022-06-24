import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";
import { memo } from "react";

export const SearchInput = () =>{
    return (
        <SContainer>
        <div>
            <Input placeholder="検索条件を入力" />
            <SButtonWrapper>
                <PrimaryButton>検索</PrimaryButton>
            </SButtonWrapper>
        </div>
</SContainer>
    );
};

const SButtonWrapper = styled.div`
padding-left 8px;

`
const SContainer = styled.div`
display:flex;
aline-items:center;

`
