import React from 'react'



function TaskListItem({ item, editTask, removeTask, doneTask }) {
    return (
        <>
            <li className={`list-group-item ${item.isDone && 'text-secondary text-decoration-line-through'}`}
                // 'list-group-item' bu kod input ile girilen değerleden oluşan listeyi düzenler.
                //aşağıdaki span sil butonu ekler.
                //btn-denger butonu kırmızı yapar. float-end butonu satır sonuna yerleştirir.
                //uuid kullanınca indexler silindi. Çünkü indexlere gerek kalmadı.
                //btn-info butonu mavi yapar. btn-group grup yapar birleştirir.
                key={item.uuid}>
                {item.priority && <span
                    className='badge text-bg-secondary me-2'>Öncelikli</span>}
                {item.task}

                <div className='btn-group float-end' role="group">
                    <button onClick={() => doneTask(item.uuid) }// btn-success butonu yeşil yapar.
                        className='btn btn-sm btn-success float-end'>Tamamlandı
                    </button>

                    <button onClick={() => editTask(item.uuid)}
                        className='btn btn-sm btn-info float-end'>Güncelle</button>

                    <button onClick={() => removeTask(item.uuid)}
                        className='btn btn-sm btn-danger float-end'>Sil</button>
                </div>
            </li>
        </>
    )
}

export default TaskListItem