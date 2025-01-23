import React from 'react'

const ReactionTable = ({reactionTime}) => {
  return (
    <table className='reaction-table'>
        <thead>
            <tr>
            <th>Click Mouse Count</th>
            <th>Reaction Time (s)</th>
            </tr>
        </thead>
        <tbody>
            {reactionTime.map((reaction, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{reaction.timeFromLast}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default ReactionTable