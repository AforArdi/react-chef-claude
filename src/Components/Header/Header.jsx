import ChefClaudeIcon from '../../assets/chef-claude-icon.png'

const Header = () => {
    return ( 
        <div>
            <header className='flex items-center justify-center gap-2 py-6'>
                <img src={ChefClaudeIcon} alt="ChefClaudeIcon" />
                <h1 className='text-[33px]'>Chef Gemini</h1>
            </header>
        </div>
     );
}
 
export default Header;