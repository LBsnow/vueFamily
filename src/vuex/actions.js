//添加
export const add = ({dispatch},item)=>{
	dispatch('ADD',item)
}
//delete
export const dele = ({dispatch},item)=>{
	dispatch('DELETE',item)
}

export const updataList =({dispatch},item)=>{
	dispatch('UPDATALIST',item)
}

export const listdele = ({dispatch},item)=>{
	dispatch('LISTDELETE',item)
}