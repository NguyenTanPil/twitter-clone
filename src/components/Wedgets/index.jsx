import {
  Container,
  SearchInput,
  Trends,
  TrendsTitle,
  TrendItem,
  TrendInfo,
  Follows,
  FollowItem,
} from './WedgetsStyles';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/ai';
import { MoreIcon } from '../Feed/Post/PostStyles';
import { CgMore } from 'react-icons/cg';
import { Avatar } from '../Common/Avatar';
import { FollowButton } from '../Common/Button';

const Wedgets = () => {
  return (
    <Container>
      <SearchInput>
        <div>
          <BiSearch />
        </div>
        <input type="text" placeholder="Search Twitter" />
      </SearchInput>
      <Trends>
        <TrendsTitle>
          <h3>Trends for you</h3>
          <div>
            <AiOutlineSetting />
          </div>
        </TrendsTitle>
        <TrendItem>
          <TrendInfo>
            <span>Trending in VietNam</span>
            <h4>#ohmbow</h4>
            <span>192K Tweets</span>
          </TrendInfo>
          <MoreIcon>
            <CgMore />
          </MoreIcon>
        </TrendItem>
        <TrendItem>
          <TrendInfo>
            <span>Entertainment · Trending</span>
            <h4>#bbrightvc</h4>
            <span>70K Tweets</span>
          </TrendInfo>
          <MoreIcon>
            <CgMore />
          </MoreIcon>
        </TrendItem>
        <TrendItem>
          <TrendInfo>
            <span>Celebrities · Trending</span>
            <h4>#mynameisnanon</h4>
            <span>102K Tweets</span>
          </TrendInfo>
          <MoreIcon>
            <CgMore />
          </MoreIcon>
        </TrendItem>
        <TrendItem>
          <span>Show more</span>
        </TrendItem>
      </Trends>

      <Follows>
        <TrendsTitle>
          <h3>Trends for you</h3>
        </TrendsTitle>
        <FollowItem>
          <div>
            <Avatar>
              <img
                src="https://pbs.twimg.com/profile_images/1036984081320497152/6cE3gsrm_400x400.jpg"
                alt=""
              />
            </Avatar>
            <TrendInfo>
              <h4>billboard charts</h4>
              <span>@billboardcharts</span>
            </TrendInfo>
          </div>
          <div>
            <FollowButton>Follow</FollowButton>
          </div>
        </FollowItem>
        <FollowItem>
          <div>
            <Avatar>
              <img
                src="https://pbs.twimg.com/profile_images/1387421728251408385/gVcCautU_400x400.jpg"
                alt=""
              />
            </Avatar>
            <TrendInfo>
              <h4>BTS_official</h4>
              <span>@bts_bighit</span>
            </TrendInfo>
          </div>
          <div>
            <FollowButton>Follow</FollowButton>
          </div>
        </FollowItem>
        <TrendItem>
          <span>Show more</span>
        </TrendItem>
      </Follows>
    </Container>
  );
};

export default Wedgets;
