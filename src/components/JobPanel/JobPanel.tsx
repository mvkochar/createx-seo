import React from 'react'
import classes from './JobPanel.module.css'

type JobPanelProps = {
    id: number
    title: string
    description: string
    requirements: string[]
    responsibilities: string[]
}

const JobPanel = ({ id, title, description, requirements, responsibilities }: JobPanelProps) => {
    const [viewAbout, setViewAbout] = React.useState(false)
    const handleAbout = ()=> {
        setViewAbout((prevState) => {
            return (
                !prevState
            )
        })
    }

    return (
        <div className={classes.job_panel}>
            <div className={classes.job_panel_heading}>
                <div className={classes.job_panel_caption}>
                    <button className={classes.job_panel_btn} onClick={handleAbout}>
                        <img src={viewAbout ? "/images/minus.png" : "/images/plus.png" } alt="minus/plus" />
                    </button>
                    <h3 className={classes.job_panel_title}>{title}</h3>
                </div>
                <a href="" className={classes.job_panel_apply}>Apply now</a>
            </div>
            <div className={viewAbout ? classes.job_panel_about : classes.d_n }>
                <p className={classes.job_panel_desc}>{description}</p>
                <div>
                    <p>Requirements:</p>
                    <ul className={classes.job_panel_list}>
                        {
                            requirements.map((req) => {
                                return (
                                    <li key={`job${id}-req${requirements.indexOf(req)}`}>{req}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <p>Responsibilities:</p>
                    <ul className={classes.job_panel_list}>
                        {
                            responsibilities.map((resp) => {
                                return (
                                    <li key={`job${id}-resp${responsibilities.indexOf(resp)}`}>{resp}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JobPanel