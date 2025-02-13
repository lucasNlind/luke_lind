import { Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Travel = () => {

    const images = [
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475065/JAMAICA_2_cx3qj4.jpg',
            title: 'Portland, Jamaica',
            rows: 3,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475077/SPLIT_CROATIA_2_pebtyn.jpg',
            title: 'Split, Croatia',
            rows: 4,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475081/KIRUNA_2_gzrk0x.jpg',
            title: 'Kiruna, Sweden',
            rows: 3,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475066/ARE_SWEDEN_iffbcg.png',
            title: 'Åre, Sweden',
            rows: 3,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475074/MADRID_SPAIN_3_nuatuy.jpg',
            title: 'Madrid, Spain',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475070/MADRID_SPAIN_2_geshy6.png',
            title: 'Madrid, Spain',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475070/MADRID_SPAIN_1_sgsozz.png',
            title: 'Madrid, Spain',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475078/SPLIT_CROATIA_1_hnag1l.jpg',
            title: 'Hvar, Croatia',
            rows: 1,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475068/JAMAICA_1_mtd4xm.jpg',
            title: 'Portland, Jamaica',
            rows: 2,
            cols: 3,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475082/SPLIT_CROATIA_3_pu7uhe.jpg',
            title: 'Split, Croatia',
            rows: 2,
            cols: 1,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475068/KIRUNA_1_q6vzfd.jpg',
            title: 'Kiruna, Sweden',
            rows: 2,
            cols: 4,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475074/BANFF_CANADA_2_ckrkt7.jpg',
            title: 'Banff, Canada',
            rows: 3,
            cols: 2,
        },
        {
            img: 'https://res.cloudinary.com/dtmra6kqg/image/upload/v1739475072/BANFF_CANADA_1_lbizlf.jpg',
            title: 'Banff, Canada',
            rows: 3,
            cols: 2,
        },
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <ImageList
                sx={{ width: '100%' }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {images.map((item) => (
                    <ImageListItem 
                        key={item.img} 
                        cols={item.cols || 1} 
                        rows={item.rows || 1}
                        sx={{
                            '& .MuiImageListItemBar-root': {
                                opacity: 0,
                                transition: 'opacity 0.3s ease-in-out',
                            },
                            '&:hover .MuiImageListItemBar-root': {
                                opacity: 1,
                            },
                            '& .MuiImageListItemBar-title': {
                                textAlign: 'center',
                                width: '100%'
                            }
                        }}
                    >
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                background: 'rgba(0, 0, 0, 0.5)',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            title={item.title}
                            position="bottom"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default Travel;