import React from 'react';
import s from './Setter.module.css'
import {ButtonMenu} from "../Controls/Btns/ButtonMenu";
import {InputRange} from "../Controls/Inputs/InputRange";


type SetterPropsType = {
  inputMin: number
  setInputMin: (value: number) => void
  inputMax: number
  setInputMax: (value: number) => void
  isCorrectRange: boolean
  setNewInputValues: () => void
  setIsActiveSetMenu: () => void
}

export const Setter: React.FC<SetterPropsType> = (props) => {

  const callbackOnclickHandler = () => {
    props.setNewInputValues()
    props.setIsActiveSetMenu()
  }

  return (<div  className={s.wrapper}>
    <InputRange labelName='Min Value'
                labelId='min'
                valueNum={props.inputMin}
                setValueNum={props.setInputMin}
                isCorrectRange={props.isCorrectRange}
    />
    <InputRange labelName='Max Value'
                labelId='max'
                valueNum={props.inputMax}
                setValueNum={props.setInputMax}
                isCorrectRange={props.isCorrectRange}
    />
    <ButtonMenu name={'Set'}
                isDisabled={!props.isCorrectRange}
                callbackOnclick={callbackOnclickHandler}
    />
    </div>);
};



