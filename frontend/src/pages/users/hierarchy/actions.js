import { isEmpty } from "~/utils";

export const getTreeData = (data ) => data.map(item => ({
    id : item._id,
    parent : isEmpty(item.supervisor) ? 0 : item.supervisor._id ,
    droppable: true,
    text: item.name
}))