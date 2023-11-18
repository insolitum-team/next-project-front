'use client'
import { Tabs, Tab } from '@nextui-org/tabs'
import { useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import { htmlDefault, cssDefault, jsDefault } from './constants'

function CodeEditor() {
    const [js, setJs] = useState(jsDefault)
    const [css, setCss] = useState(cssDefault)
    const [html, setHtml] = useState(htmlDefault)
    const files = {
        javascript: {
            name: 'script.js',
            language: 'javascript',
            defaultValue: jsDefault,
            value: js,
            setValue: setJs,
        },
        css: {
            name: 'style.css',
            language: 'css',
            defaultValue: cssDefault,
            value: css,
            setValue: setCss,
        },
        html: {
            name: 'index.html',
            language: 'html',
            defaultValue: htmlDefault,
            value: html,
            setValue: setHtml,
        },
    }
    const [fileName, setFileName] = useState('html')

    const file = files[fileName]
    const [srcDoc, setSrcDoc] = useState('')

    const runCode = () => {
        setSrcDoc(
            `<html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
    </html>`
        )
    }
    return (
        <div className='flex flex-col'>
            <div className='font-extrabold text-black text-[36px] tracking-[0] leading-[38.3px] whitespace-nowrap top-0 left-0 mb-9'>
                Start coding in seconds
            </div>
            <Card className='w-[959px] mb-9 h-80'>
                <CardHeader className=''>
                    <Tabs
                        aria-label='Options'
                        selectedKey={fileName}
                        onSelectionChange={setFileName}
                    >
                        <Tab key='html' title='HTML'></Tab>
                        <Tab key='css' title='CSS'></Tab>
                        <Tab key='javascript' title='JavaScript'></Tab>
                    </Tabs>
                </CardHeader>
                <CardBody>
                    <Editor
                        theme='vs-dark'
                        path={file.name}
                        defaultLanguage={file.language}
                        defaultValue={file.defaultValue}
                        value={file.value}
                        onChange={file.setValue}
                    />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Button variant='solid' color='primary' onPress={runCode}>
                        Run code
                    </Button>
                </CardHeader>
                <CardBody>
                    <iframe
                        className='h-[450px]'
                        srcDoc={srcDoc}
                        title='output'
                        // разрешаем выполнение скриптов
                        sandbox='allow-scripts'
                    />
                </CardBody>
            </Card>
        </div>
    )
}

export default CodeEditor
