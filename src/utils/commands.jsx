
export const commands = {
    help: {
        type: 'output',
        content: (
            <div>
                <p>Available commands:</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                    <li>- <span style={{ color: '#fff' }}>about</span>: Who am I?</li>
                    <li>- <span style={{ color: '#fff' }}>projects</span>: Show off my work</li>
                    <li>- <span style={{ color: '#fff' }}>contact</span>: Get in touch</li>
                    <li>- <span style={{ color: '#fff' }}>clear</span>: Clear the screen</li>
                    <li>- <span style={{ color: '#fff' }}>help</span>: Show this message</li>
                </ul>
            </div>
        )
    },
    about: {
        type: 'output',
        content: (
            <div>
                <p>Hey there! I'm a passionate developer who loves retro tech and modern web apps.</p>
                <p>I build things with React, Vite, and a lot of coffee.</p>
                <p>This terminal is running on <strong>Aliyun ESA</strong>.</p>
            </div>
        )
    },
    contact: {
        type: 'output',
        content: (
            <div>
                <p>Find me on:</p>
                <ul style={{ listStyleType: 'none', paddingLeft: '1rem' }}>
                    <li>Github: <a href="#" style={{ color: 'var(--terminal-green)' }}>@i4leader</a></li>
                    <li>Twitter: <a href="#" style={{ color: 'var(--terminal-green)' }}>@jackt1314</a></li>
                    <li>Email: <a href="mailto:i4leader@163.com" style={{ color: 'var(--terminal-green)' }}>i4leader@163.com</a></li>
                </ul>
            </div>
        )
    },
    // 'projects' and 'clear' will be handled dynamically in the component
};
