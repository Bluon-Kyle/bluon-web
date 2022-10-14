import React from 'react'
import { boardList } from './boardList';
import BoardListRender from './BoardListRender';
import './_board.scss'
const Board = () => {

    return(
        <div className='board-component'>
            {boardList.map((menu, index) => {
                return(
                <BoardListRender items={menu} key={index} />
                )
            })}
        </div>
    )
}

export default Board