import ChefClaudeIcon from '../../assets/chef-claude-icon.png'

const Header = () => {
    return ( 
        <div className='flex items-center justify-center gap-2 py-6 border'>
            <img src={ChefClaudeIcon} alt="ChefClaudeIcon" />
            <h1 className='text-[32px]'>Chef Claude</h1>
        </div>
     );
}
 
export default Header;