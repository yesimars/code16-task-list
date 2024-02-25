import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskList from './TaskList';

function TaskForm() {

    const emptyForm = { task: "", priority: false, isDone: false }//task'a girilen bilginin tıklandıktan sonra boş olması için task: "" yazılır.
    const [formData, setFormData] = useState(emptyForm)
    const [tasks, setTasks] = useState([])
    const [taskChangeCount, setTaskChangeCount] = useState(0)


    useEffect(() => {
        if (taskChangeCount > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }, [taskChangeCount])

    useEffect(() => {
        const localStorageTasks = JSON.parse(localStorage.getItem("tasks"))
        setTasks(localStorageTasks ?? [])
    }, [])

    function removeTask(uuid) {
        console.log(uuid);//silme butonuna bastığında butonların sıra numaralarını console yaz.(0,1,2,3...)
        setTasks(prev => prev.filter(item => item.uuid !== uuid))
        setTaskChangeCount(prev => prev + 1)

    }

    function editTask(uuid) {
        console.log(uuid);//güncelle butonuna bastığında butonların sıra numaralarını console yaz.(0,1,2,3...)
        const task = tasks.find(item => item.uuid == uuid)
        setFormData({ ...task, isEdited: true })//güncelle butonuna bastığında hangi satırdakine bastıysan o satırdaki veriyi Task'a getirir. 
        setTaskChangeCount(prev => prev + 1)

    }

    function doneTask(uuid) {
        const taskIndex = tasks.findIndex(item => item.uuid === uuid)
        const task = tasks[taskIndex]
        task.isDone = !task.isDone
        const newTasks = tasks.slice()
        newTasks[taskIndex] = task
        setTaskChangeCount(prev => prev + 1)
    }


    function handleInputChange(event) {
        setFormData(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.type == "checkbox" ?
                    event.target.checked : event.target.value
            }
        })
    }


    function handleFormSubmit(event) {
        event.preventDefault()
        if (formData.isEdited) {//Bu alan güncelle butonuna bastıktan sonra değişiklik yapmak istediğimiz satırda değişiklik yapmazı sağlar.
            const taskIndex = tasks.findIndex(item => item.uuid === formData.uuid)
            const newTasks = tasks.slice()
            newTasks[taskIndex] = { ...formData }
            setTasks(newTasks)

        }
        else if (formData.task.length > 3) {
            formData.uuid = uuidv4()
            setTasks(
                prev =>
                    [formData, ...prev]// ...prev en sona ekle demek. formData başa ekle demek bu kodda. üç nokta eskileri getir demek.
            )

        }
        setTaskChangeCount(prev => prev + 1)
        setFormData(emptyForm)
        event.target.reset()//her tıklamadan önce bilgiler resetlenir.
    }

    return (//46. satırda TaskList'e tasks ve removeTask gönderilmiştir. Sonradan başkaları da eklenebilir.
        <div className='container '>
            <p className='mb-4 m-3'>İtfaiye Günlük Görev Listesi</p>
            <form onSubmit={handleFormSubmit}>
                <div className="row mb-3 m-1">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Görev Giriniz :</label>
                    <div className="col-sm-10">
                        <input
                            onChange={handleInputChange}
                            type="text"
                            value={formData.task}//Değeri getirmesi için yazılan kod
                            className="form-control"
                            id="inputEmail3"
                            name="task"
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check ms-3">
                            <input
                                className="form-check-input"
                                onChange={handleInputChange}
                                type="checkbox"
                                checked={formData.priority}//tiki işaretli ise tiki ile beraber getirmesi için yazılan bir kod
                                id="priority"
                                name="priority"
                            />
                            <label className="form-check-label" htmlFor="priority">
                                Öncelikli
                            </label>
                            <button type="submit" className="btn btn-primary float-end mx-3">Kaydet</button>
                        </div>
                        
                    </div>
                </div>
            </form>
            <TaskList
                tasks={tasks}
                removeTask={removeTask}
                editTask={editTask}
                doneTask={doneTask} />
        </div>
    )
}

export default TaskForm