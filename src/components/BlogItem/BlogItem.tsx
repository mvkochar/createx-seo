import classes from './BlogItem.module.css'

type BlogItemProps = {
    id: number
    image: string
    category: string
    date: string
    author: string
    title: string
    description: string
}

const BlogItem = ({ id, image, category, date, author, title, description }: BlogItemProps) => {
    return (
        <div className={classes.blog_item}>
            <div><img src={image} alt={`blog${id}`} /></div>
            <div className={classes.blog_item_meta}>
                <p>{category}</p>
                <p className={classes.blog_item_date}>{date}</p>
                <p className={classes.blog_item_author}>{author}</p>
            </div>
            <h3 className={classes.blog_item_title}>{title}</h3>
            <p className={classes.blog_item_desc}>{description}</p>
            <div className={classes.blog_item_more}>
                <h4 className={classes.more_title}>Read more</h4>
                <a href="" className={classes.more_link}>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7929 0.792893C12.1834 0.402369 12.8166 0.402369 13.2071 0.792893L17.7071 5.29289C18.0976 5.68342 18.0976 6.31658 17.7071 6.70711L13.2071 11.2071C12.8166 11.5976 12.1834 11.5976 11.7929 11.2071C11.4024 10.8166 11.4024 10.1834 11.7929 9.79289L14.5858 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H14.5858L11.7929 2.20711C11.4024 1.81658 11.4024 1.18342 11.7929 0.792893Z" fill="#7772F1" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default BlogItem