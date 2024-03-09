import React, { useEffect, useState } from 'react'
import TaskListItem from './TaskListItem'

function TaskList({ tasks, removeTask, editTask, doneTask }) {
    const [priority, setPriority] = useState(false)
    const [filteredTasks, setFilteredTasks] = useState(tasks)

    function handlePriorityFilter() {//Öncelikli olanları gösteren fonksiyon oluşturuldu.
        setPriority(prev => !prev)
    }

    useEffect(() => {
        setFilteredTasks(tasks)

    }, [tasks])

    useEffect(() => {
        priority ? setFilteredTasks(tasks.filter(
            item => item.priority === priority)) : setFilteredTasks(tasks)

    }, [priority])

    return (// 'p-4 bg-light mb-5 border rounded' bu kod kaydedilenlerin arkasına 
        //açık gri renginde bir alan oluşturur. card gibi.
        //'mb-3' yazı büyüklüğünü ayarlar.
        <>

            <div className='p-4 m-2 bg-light mb-5 border-0 rounded bg-primary-subtle'>
                <p className='mb-3 m-1'>
                    <div className="input-group">
                        <select className="form-select bg-primary-subtle shadow border-0" id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option selected>Seçiniz...</option>
                            <option value="1">İtfaiye Birim Amirleri</option>
                            <option value="2">İtfaiye Şube Müdürleri</option>
                            <option value="3">Personel ve İtfaiye Amirleri</option>
                            <option value="4">İtfaiye Çavuşları</option>
                            <option value="5">İtfaiye Erleri</option>
                            <option value="6">İtfaiye İlk Yardım Görevlileri</option>
                            <option value="7">İtfaiye Söndürme Aracı Şoförleri</option>
                        </select>
                        <span
                            onClick={handlePriorityFilter}//öncelikli olanları gösteren buton
                            className={`btn btn-sm ${!priority ? "btn-info" : "btn-primary"} float-end shadow`}>
                            {!priority ? "Öncelikli Olanları Göster" : "Hepsini Göster"}
                        </span>
                    </div>

                </p>

                <ul className='list-group my-3 shadow'>
                    {filteredTasks.map(
                        (item, index) =>
                            // list-group my-3 bu kod sayfanın üst sınırı ile 
                            // arasında boşluk bırakır. Ve sayfayı düzenler güzelleştirir.
                            <TaskListItem
                                key={index}
                                item={item}
                                editTask={editTask}
                                removeTask={removeTask}
                                doneTask={doneTask} />)}

                </ul>
                <button className="btn btn-outline-primary mt-1 shadow" type="button">Gönder</button>
            </div>

        </>
    )
}

export default TaskList