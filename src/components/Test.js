import React,{useState} from 'react';

const Test = () =>{
	const [job, setJob] = useState('')
	const [jobs, setJobs] = useState([])
	const handleSubmit = (todo) =>{
		if(!job){
			return alert("nhập ký tự")
		}
		setJobs(prev =>[...prev, todo = {title:job, id: Math.floor(Math.random() * 1001),}]);
		setJob('')

	}
	const handleClear = (todo) => () =>{
		setJobs(
			jobs.filter(list => list.id !== todo.id)
		)
	 console.log('anh',todo)
	}

	
	return(
		<div>
			<input value={job}
			 onChange={e => setJob(e.target.value)}	 type='text' />
			<button
				onClick={handleSubmit}
				
			>ADD</button>
			<div>
				<ul>
					{jobs.map((item,index) =>(
					<li key={index}>
						{item.title}
						<button
							onClick={ handleClear(item)}
						>xoa</button>
						<button>Sửa</button>
					</li>
				))}
				</ul>
				
			</div>
		</div>
	)
}
export default Test
