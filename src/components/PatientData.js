import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableCell, TableRow, TableBody } from '@mui/material';


function DataTable() {
    const [data] = useState([
        {
            id: '001',
            date: '2023-07-01',
            a1c: 5.6,
            ldl: 120,
            vitaminD: 18,
            bloodPressure: '120/80',
            glucose: 98,
        },
        {
            id: '002',
            date: '2023-06-15',
            a1c: 6.1,
            ldl: 145,
            vitaminD: 25,
            bloodPressure: '130/85',
            glucose: 110,
        },
        {
            id: '003',
            date: '2023-05-10',
            a1c: 6.4,
            ldl: 160,
            vitaminD: 15,
            bloodPressure: '140/90',
            glucose: 126,
        },
    ]);

    const riskLevels = {
        normal: 'white',
        borderline: 'yellow',
        highRisk: 'red',
    };

    const getRiskLevel = (value, key) => {

        if (key === 'a1c') {
            if (value <= 5.7) {
                return 'normal';
            }
            else if (value >= 6.5) {
                return 'highRisk';
            }
            else return 'borderline';
        } else if (key === 'ldl') {
            if (value <= 130) {
                return 'normal';
            }
            else if (value >= 160) {
                return 'highRisk'
            }
            else return 'borderline';
        } else if (key === 'bloodPressure') {
            var bp = value.split('/')
            var systolic = bp[0]
            var diastolic = bp[1]

            if (systolic <= 130 & diastolic <= 80) {
                return 'normal'
            } else if (systolic >= 130 & diastolic >= 80) {
                return 'highRisk'
            } else {
                return 'borderline'
            }
        } else if (key === 'glucose') {
            if (value < 100) {
                return 'normal'
            } else if (value >= 126) {
                return 'highRisk'
            } else {
                return 'borderline'
            }
        } else if (key === 'vitaminD') {
            if (value > 29) {
                return 'normal'
            } else if (value < 20) {
                return 'highRisk'
            } else {
                return 'borderline'
            }
        } else {
            return 'normal'; // Assume normal for other columns
        }
    };

    return (

        <TableContainer>
            <Table aria-label='simple table' border='2' borderColor='black'>
            <TableHead>
                <TableRow>
                    <TableCell >ID</TableCell>
                    <TableCell >Date</TableCell>
                    <TableCell >A1C</TableCell>
                    <TableCell >LDL</TableCell>
                    <TableCell >Vitamin D</TableCell>
                    <TableCell >Blood Pressure</TableCell>
                    <TableCell >Glucose</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                    <TableRow key={item.id}>
                        {Object.keys(item).map((key) => (
                            <TableCell key={`${item.id}-${key}`} style={{ backgroundColor: riskLevels[getRiskLevel(item[key], key)] }}>
                                {item[key]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>

        // <table>
        //     <thead>
        //         <tr>
        //             <th>ID</th>
        //             <th>Date</th>
        //             <th>A1C</th>
        //             <th>LDL</th>
        //             <th>Vitamin D</th>
        //             <th>Blood Pressure</th>
        //             <th>Glucose</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {data.map((item) => (
        //             <tr key={item.id}>
        //                 {Object.keys(item).map((key) => (
        //                     <td
        //                         key={`${item.id}-${key}`}
        //                         style={{ backgroundColor: riskLevels[getRiskLevel(item[key], key)] }}
        //                     >
        //                         {item[key]}
        //                     </td>
        //                 ))}
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
    );
}

export default DataTable;