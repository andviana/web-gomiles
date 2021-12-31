import React from 'react'
import Card from '../../components/Card'
import CardBox from '../../components/CardBox'
import ChartArea from '../../components/ChartArea'
import ColorSystemGroup from '../../components/ColorSystemGroup'
import PageHeading from '../../components/PageHeading'
import ProgressBarGroup from '../../components/ProgressBarGroup'

const Painel: React.FC = () => {
  return (
    <>
      <PageHeading title='Painel' btnColor='primary' btnLabel='home' btnFaIcon='fas fa-home' btnTarget='http://localhost:3000' />
      {/* Content Row */}
      <div className='row'>
        {/* Earnings (Monthly) Card Example */}
        <CardBox title='Earnings (Monthly)' border='primary' faIcon='fas fa-calendar' contentText='40%' />
        <CardBox title='Earnings (Annual)' border='success' faIcon='fas fa-dollar-sign' contentText='$215,000' />
        <CardBox title='Tasks' border='info' faIcon='fas fa-clipboard-list'>
          <div className='row no-gutters align-items-center'>
            <div className='col-auto'>
              <div className='h5 mb-0 mr-3 font-weight-bold text-gray-800'>50%</div>
            </div>
            <div className='col'>
              <div className='progress progress-sm mr-2'>
                <div className='progress-bar bg-info' role='progressbar'
                  style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </CardBox>
        <CardBox title='Pending Requests' border='warning' faIcon='fas fa-comments' contentText='18' />
      </div>
      {/* Content Row */}
      <ChartArea />
      {/* Content Row */}
      <div className='row'>
        {/* Content Column */}
        <div className='col-lg-6 mb-4'>
          {/* Project Card Example */}
          <Card title='Projects'>
            <ProgressBarGroup items={[
              { color: 'danger', title: 'Server Migration', percent: 20 },
              { color: 'warning', title: 'Server Migration', percent: 40 },
              { title: 'Server Migration', percent: 60 },
              { color: 'info', title: 'Server Migration', percent: 80 },
              { color: 'success', title: 'Server Migration', percent: 100, labelPercent: 'Complete!' }
            ]} />
          </Card>
          {/* Color System */}
          <div className='row'>
            <ColorSystemGroup items={[
              { title: 'Primary', subtitle: '#4e73df', color: 'primary' },
              { title: 'Success', subtitle: '#1cc88a', color: 'success' },
              { title: 'Info', subtitle: '#36b9cc', color: 'info' },
              { title: 'Warning', subtitle: '#f6c23e', color: 'warning' },
              { title: 'Danger', subtitle: '#e74a3b', color: 'danger' },
              { title: 'Secondary', subtitle: '#858796', color: 'secondary' },
              { title: 'Light', subtitle: '#f8f9fc', color: 'light', textColor: 'text-black-50' },
              { title: 'Dark', subtitle: '#5a5c69', color: 'dark' },
            ]} />
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          {/* Illustrations */}
          <Card title='Illustrations'>
            <div className='text-center'>
              <img className='img-fluid px-3 px-sm-4 mt-3 mb-4' style={{ width: '25rem' }}
                src='img/undraw_posting_photo.svg' alt='...' />
            </div>
            <p>Add some quality, svg illustrations to your project courtesy of <a
              target='_blank' rel="noreferrer" href='https://undraw.co/'>unDraw</a>, a
              constantly updated collection of beautiful svg images that you can use
              completely free and without attribution!</p>
            <a target='_blank' rel="noreferrer" href='https://undraw.co/'>Browse Illustrations on
              unDraw &rarr;</a>
          </Card>
          {/* Approach */}
          <Card title='Development Approach'>
            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamee' in order to reduce
              CSS bloat and poor page performance. Custom CSS classNamee' are used to create
              custom components and custom utility classNamee'.</p>
            <p className='mb-0'>Before working with this theme, you should become familiar with the
              Bootstrap framework, especially the utility classNamee'.</p>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Painel
