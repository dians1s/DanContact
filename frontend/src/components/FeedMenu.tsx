import React from "react";

interface FilterType {
    sort: string,
    query: string
}

interface FeedMenuProps {
    filter: {sort: string, query: string},
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const FeedMenu: React.FC<FeedMenuProps> = ({filter, setFilter}) => {

    return (
        <div className="feed-menu">
            <input onChange={(e) => setFilter({...filter, query: e.target.value})} type="text" className="feed-menu__search" placeholder="Поиск по новостям..."/>
            <label htmlFor="feed_filter" className="feed-menu__label">Сортировка новостей:</label>
            <select onChange={(selectedSort) => setFilter({...filter, sort: selectedSort.target.value})} defaultValue='date' name="feed_filter" id="feed_filter" className="feed-menu__select">
                <option value="date">По дате</option>
                <option value="likes">По лайкам</option>
            </select>
        </div>
    )
}

export default FeedMenu;