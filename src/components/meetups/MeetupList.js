import classes from './MeetupList.module.css'
import MeetupItem  from './MeetupItem';

function MeetupList(proprs){
    return(
        <li className={classes.list}>
            {proprs.meetups.map( meetup => <MeetupItem 
                                            key={meetup.id} 
                                            id={meetup.id} 
                                            image={meetup.image}
                                            title={meetup.title}
                                            address={meetup.address}
                                            description={meetup.description}
                                            />
                                )}
        </li>
    );
}

export default MeetupList;