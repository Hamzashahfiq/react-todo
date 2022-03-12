import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Input from '@mui/material/Input';
import { border, height } from '@mui/system';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ariaLabel = { 'aria-label': 'description' };


export default function RowsGrid() {
  const [taskDetail, setTaskDetail] = React.useState('')
  const [taskData, setTaskData] = React.useState([])


  const addHandler = () => {
    if (!taskDetail) {
      alert("Please enter task detail First");
      return;
    }

    let task = {
      Task_Detail: taskDetail
    }
    setTaskData(...taskData, task)

    setTaskDetail('');

  }


  return (
    <Box>
    
      <div style={{ marginLeft: '230px', height: '440px', width: '84%', boxSizing: 'border-box' }}>

        <DataGrid
          columns={[{ field: 'Task_Detail' }]}
          rows={[...taskData.map((item, index) => {
            return (
              item
            )
          })
          ]}
        />
      </div>

    </Box>
  );
}
